import { Image, Item } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item, onOpenModal }) => {
  console.log(item.webformatURL);

  return (
    <Item key={item.id}>
      <Image
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => onOpenModal(item.largeImageURL)}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
};
