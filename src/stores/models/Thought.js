import _ from 'lodash';
import {formatDate} from 'utils/date-utils';

class Thought {

  id;
  content;
  createdAt;
  slug;
  status;
  title;
  coverImage;
  description;
  tags;

  getMetaFields = fields => _.reduce(fields, (object, {key, value}) => {
    object[key] = value;
    return object;
  }, {});

  constructor(props) {
    const metafields = this.getMetaFields(props.metafields);
    this.content = props.content;
    this.createdAt = formatDate(new Date(props.created_at), 'MM.dd.YYYY HH:mm');
    this.slug = props.slug;
    this.status = props.status;
    this.title = props.title;
    this.id = props._id;

    //metafields
    this.description = metafields.description;
    this.tags = metafields.tags ?
      metafields.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '')
      : null;
    this.coverImage = metafields.cover_image;
  }


}

export default Thought;