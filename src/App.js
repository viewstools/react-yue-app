import React from 'react'
import gui from 'gui'

const App = () => (
  <container
    style={{
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
    }}
  >
    <label
      text="hello!!"
      style={{
        color: '#ff0000',
      }}
      font={gui.Font.default().derive(0, 'bold', 'normal')}
    />
    <label text="hello" />

    <scroll
      style={{
        flex: 1,
      }}
    >
      <container>
        <label text="hello!" />
        <label text="hello" />
        <entry
          // style={{
          //   fontSize: 80,
          //   borderWidth: 1,
          //   borderColor: '#ff0000',
          // }}
          font={gui.Font.default().derive(0, 'bold', 'normal')}
          defaultText="hey"
        />
      </container>
    </scroll>
  </container>
)

export default App
