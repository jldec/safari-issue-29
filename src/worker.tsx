import { defineApp, renderToStream } from 'rwsdk/worker'
import { render, route } from 'rwsdk/router'

import { Document } from '@/app/Document'
import { HomePage } from '@/app/pages/HomePage'
import { NotFoundPage } from '@/app/pages/NotFoundPage'
import { ClientComponentPage } from './app/pages/ClientComponentPage'

export type AppContext = {}

export default defineApp([
  render(Document, [
    route('/', HomePage),
    route('/client-component', ClientComponentPage),
    route('/not-found', NotFoundPage)
  ]),
  route('/*', async () => {
    const stream = await renderToStream(
      <NotFoundPage />,
      { Document }
    )
    return new Response(stream, {
      status: 404,
      headers: { 'Content-Type': 'text/html' }
    })
  })
])
