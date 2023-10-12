import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      // Добавьте другие разделы, если они есть
      S.listItem()
        .title('Sections')
        .icon(() => 'view-list')
        .child(S.component().component(Sections).title('Sections')),
    ])
