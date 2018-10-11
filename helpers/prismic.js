import { isArray } from './generics';

export function getContentType(response) {
  const resIsArray = isArray(response);

  return {
    content_ready: resIsArray && response.length > 0,
    content:
      resIsArray &&
      response.reduce((all_content, content) => {
        return {
          ...all_content,
          [content.type]: {
            data: content.data
          }
        };
      }, {})
  };
}

export function getContentTypeData({ content, keys }) {
  return content && Object.keys(content).length > 0
    ? {
        data: keys.reduce((page_content, key) => {
          return {
            ...page_content,
            [key]: content[key]
          };
        }, {})
      }
    : { data: {} };
}

export function keyContent(content) {
  const keys = Object.keys(content);

  return keys
    ? keys.reduce((content_keys, content_key) => {
        return {
          ...content_keys,
          [content_key]: content[content_key]
        };
      }, {})
    : {};
}

export function getContent(type, content, keys) {
  return getContentTypeData({
    content: content[type] && content[type].data,
    keys
  }).data;
}

function getLinkHash(fragment) {
  return fragment[1] ? `/${fragment[1]}` : undefined;
}

// Content Type Data Helpers
export const setLinkTarget = st => (st.target ? st.target : '_self');

export const text = t => t[0].text;
export const url = l => {
  const link_fragment = l.url.split('su.');
  const link_hash = l.url.includes('//su') ? getLinkHash(link_fragment) : l.url;
  const isIndex = Boolean(!link_hash);

  return isIndex ? '/' : link_hash;
};
