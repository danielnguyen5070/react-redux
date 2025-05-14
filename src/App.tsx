import './App.css'
import { Counter } from './features/counter/Counter'
import { Post } from './features/post/Post'
import { User } from './features/user/User'

function App() {
  return (
    <>
      <div>
        <Counter />
        <Post />
        <User />
      </div>
    </>
  )
}

export default App
