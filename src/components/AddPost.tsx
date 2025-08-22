'use client'
import React, { useState } from 'react'
import axios from 'axios'

export default function AddPost() {
  const [postText, setPostText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [showImageInput, setShowImageInput] = useState(false)
  const [posts, setPosts] = useState([])

  const addPost = async () => {
    if (!postText.trim()) {
      alert('maglagay here ng text')
      return
    }
    try {
      const token = localStorage.getItem("Token")
      console.log('Token exists:', !!token)
      console.log('Sending data:', { text: postText, imageUrl: imageUrl })
      const response = await axios.post('http://127.0.0.1:8000/api/posts', {
        content: postText,
        imageUrl: imageUrl
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      console.log('API Response:', response.data)
      const newPost = {
        id: response.data.id || Date.now(),
        text: postText,
        imageUrl: imageUrl,
        time: 'Just now'
      }
      setPosts([{ ...newPost}, ...posts] as any)
      setPostText('')
      setImageUrl('')
      setShowImageInput(false)
      alert('Post added!')
    } catch (error: any) {
      console.error('Add post error:', error)
      if (error.response) {
        console.error('Error status:', error.response.status)
        console.error('Error data:', error.response.data)
      }
    }
  }

  const deletePost = async (postId: string | number) => {
    if (!confirm('Delete monabato?')) return
    try {
      const token = localStorage.getItem("Token")
      console.log('Deleting post ID:', postId)
      await axios.delete(`http://127.0.0.1:8000/api/posts/${postId}`, {
      })
      setPosts(posts.filter((post: any) => post.id !== postId))
      alert('deleted na')
    } catch (error: any) {
      console.error('Delete error:', error)
      if (error.response) {
        console.error('Error response:', error.response.data)
      }
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className='p-4 bg-white rounded-lg border mb-6'>
        <div className="flex gap-4">
          <img src="https://imgs.search.brave.com/ztvGGX5gyY6QY69s8t7nTgmjG4DWi67gynyORQGO8kA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmt5/bS1jZG4uY29tL3Bo/b3Rvcy9pbWFnZXMv/bmV3c2ZlZWQvMDAz/LzEwNy8yODMvMDUz/LmpwZw" className='w-12 h-12 rounded-full'/>
          <div className="flex-1">
            <textarea placeholder='What are you thinking?'className='w-full p-3 border rounded-lg h-24' value={postText} onChange={(e) => setPostText(e.target.value)}/>
            {showImageInput && (
              <div className="mt-3">
                <input type="url" placeholder="Enter image URL" className='w-full p-3 border rounded-lg' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                {imageUrl && (
                  <img src={imageUrl} className="mt-2 w-32 h-32 object-cover rounded border" />
                )}
              </div>
            )}
            <div className='flex justify-between items-center mt-3'>
              <button onClick={() => setShowImageInput(!showImageInput)} className={`px-3 py-1 rounded ${showImageInput ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}>
                click h {showImageInput ? 'Hide Photo' : 'Add Photo'}
              </button>
              <button onClick={addPost} className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600' >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No posts yet</p>
        ) : (
          posts.map((post: any) => (
            <div key={post.id} className="bg-white rounded-lg border p-4 mb-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <div>
                    <div className="font-medium">You</div>
                    <div className="text-sm text-gray-500">{post.time}</div>
                  </div>
                </div>
                <button onClick={() => deletePost(post.id)}className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                  Delete
                </button>
              </div>
              <div className="mb-3">
                {post.text}
              </div>
              {post.imageUrl && (
                <img src={post.imageUrl} className="w-full max-h-96 object-cover rounded" onError={(e: any) => e.target.style.display = 'none'} />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
