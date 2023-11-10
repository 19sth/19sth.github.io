import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export interface MetaContentI {
  date: string
  title: string
  type: string
  summary: string
}

export interface ContentI extends MetaContentI {
  body: {
    code: any
  },
}

function getDocType(docTypeName: string) {
  return defineDocumentType(() => ({
    name: docTypeName,
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
      title: {
        type: 'string',
        required: true
      },
      date: {
        type: 'string',
        required: true
      },
      contentType: {
        type: 'string',
        required: true
      },
      link: {
        type: 'string',
        required: true
      },
      summary: {
        type: 'string',
        required: true
      }
    },
    computedFields: {
      url: {
        type: 'string',
        resolve: content => `/${content._raw.flattenedPath}`
      }
    }
  }))
}

export const Blog = getDocType('Blog');

export default makeSource({
  contentDirPath: 'contentlayer_data',
  documentTypes: [Blog]
})
