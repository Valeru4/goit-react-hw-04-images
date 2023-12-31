import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'services/api';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import Notiflix from 'notiflix';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({ isOpen: false, largeImageURL: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;
    fetchImagesData(searchQuery, currentPage);
  }, [searchQuery, currentPage]);

  const fetchImagesData = async (searchQuery, currentPage) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchImages(searchQuery, currentPage);
      // if (response.hits.length === 0) {
      //   alert('Nothing found!');
      // }

      const images = response.hits.map(
        ({ id, tags, webformatURL, largeImageURL }) => ({
          id,
          tags,
          webformatURL,
          largeImageURL,
        })
      );

      setImages(prevState => [...prevState, ...images]);
      setTotalHits(response.totalHits);
    } catch (error) {
      setError('Your request is failure');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      Notiflix.Notify.failure(error);
    }
  }, [error]);

  const handleSubmit = searchQuery => {
    setImages([]);
    setCurrentPage(1);
    setSearchQuery(searchQuery);
    setTotalHits(0);
  };

  const loadMore = event => {
    event.preventDefault();
    setIsLoading(true);
    setCurrentPage(prevPage => prevPage + 1);
  };

  const onOpenModal = largeImageURL => {
    setModal({
      isOpen: true,
      largeImageURL: largeImageURL,
    });
  };

  const onModalClose = () => {
    setModal({
      isOpen: false,
      largeImageURL: '',
    });
  };

  const showBtn = !isLoading && images.length !== totalHits;
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {isLoading && <Loader />}

      {modal.isOpen && (
        <Modal
          largeImageURL={modal.largeImageURL}
          onModalClose={onModalClose}
        />
      )}

      <ImageGallery images={images} onOpenModal={onOpenModal} />

      {showBtn && <Button onClick={loadMore} />}
    </div>
  );
};
