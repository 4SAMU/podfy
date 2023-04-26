import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'podcastEpisode',
  type: 'document',
  title: 'Podcast Episode',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'audioFileUrl',
      type: 'url',
      title: 'Audio File URL',
    }),
  ],
})
