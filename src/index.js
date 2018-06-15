import { render } from 'react-yue'
import App from './App.js'
import gui from 'gui'
import React from 'react'

// Create a window and a root container:
const win = gui.Window.create({})
win.setContentSize({ width: 400, height: 250 })

const contentView = gui.Container.create()
contentView.setStyle({ flexDirection: 'row' })
win.setContentView(contentView)
win.center()
win.activate()

// Create your react elements and render them:
render(<App />, contentView)

// Start your app
if (!process.versions.yode) {
  gui.MessageLoop.run()
  process.exit(0)
}
