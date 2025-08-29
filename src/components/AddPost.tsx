'use client'
import { useGetListing } from '@/app/hooks/useGitListing'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


interface Post {
  id: string | number
  caption: string
  imageUrl?: string
  time: string
  author?: string
}


export default function AddPost() {
  const [postText, setPostText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [showImageInput, setShowImageInput] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [editingPost, setEditingPost] = useState<string | number | null>(null)
  const [editText, setEditText] = useState('')
  
  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const token = localStorage.getItem("auth_token")
      if (!token) {
        console.warn('No auth token found')
        return
      }
      const response = await axios.get('http://127.0.0.1:8000/api/posts', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      setPosts(response.data || [])
    } catch (error: any) {
      console.error('Load posts error:', error)
    }
  }

  const addPost = async () => {
    if (!postText.trim()) {
      alert('Please enter some text for your post')
      return
    }
    setIsLoading(true)
    try {
      const token = localStorage.getItem("auth_token")
      if (!token) {
        alert('Authentication token not found. Please log in again.')
        return
      }

      const response = await axios.post('http://127.0.0.1:8000/api/posts', {
        caption: postText,
        imageUrl: imageUrl || undefined
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
     
      const newPost: Post = {
        id: response.data.id || Date.now(),
        caption: postText,
        imageUrl: imageUrl || undefined,
        time: 'Just now',
        author: response.data.author || 'Mark'
      }
     
      setPosts([newPost, ...posts])
      setPostText('')
      setImageUrl('')
      setShowImageInput(false)
     
      alert('Sumakses')
    } catch (error: any) {
      console.error('Add post error:', error)
      alert('Error adding post')
    } finally {
      setIsLoading(false)
    }
  }

  const editPost = async (postId: string | number) => {
    if (!editText.trim()) {
      alert('Enter text po')
      return
    }
    
    try {
      const token = localStorage.getItem("auth_token")
      if (!token) {
        alert('log in po ulit')
        return
      }

      await axios.put(`http://127.0.0.1:8000/api/posts/${postId}`, {
        caption: editText
      }, {
        headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'}
      })

      setPosts(posts.map(post => 
        post.id === postId 
          ? { ...post, caption: editText }
          : post
      ))
      
      setEditingPost(null)
      setEditText('')
      alert('Updated na shessh')
    } catch (error: any) {
      console.error('Edit error:', error)
      alert('Error updating post')
    }
  }

  const deletePost = async (postId: string | number) => {
    if (!confirm('sure kanaba ?')) return
   
    try {
      const token = localStorage.getItem('auth_token')
      if (!token) {
        alert('not found yung token login kamuna')
        return
      }
     
      await axios.delete(`http://127.0.0.1:8000/api/posts/${postId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
     
      setPosts(posts.filter((post) => post.id !== postId))
      alert('Sumakses')
    } catch (error: any) {
      console.error('Delete error:', error)
      alert('Error deleting post')
    }
  }
  
  const isValidImageUrl = (url: string) => {
    try {
      new URL(url)
      return /\.(jpg|jpeg|png|gif|webp)$/i.test(url)
    } catch {
      return false
    }
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className='p-4 bg-white rounded-lg shadow-md mb-6'>
        <div className="flex gap-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLh22WwcNMhz_U18LIg6SDOc6qTy8wh1r96DvupUUf7el6MtH0FarmBcfb6EhBnuGq3Oo&usqp=CAU" alt="Profile" className='w-12 h-12 rounded-full object-cover'/>
          <div className="flex-1">
            <textarea placeholder="ano ang iyong nasa isipan" className='w-full p-3 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'  value={postText}  onChange={(e) => setPostText(e.target.value)} disabled={isLoading}/>
            
            {showImageInput && (
              <div className="mt-3">
                <input type="url" placeholder="lagay mo dito URL" className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} disabled={isLoading}/>
                {imageUrl && isValidImageUrl(imageUrl) && (
                  <img src={imageUrl} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded border" onError={(e: any) => { e.target.style.display = 'none'}} />
                )}
              </div>
            )}

            <div className='flex justify-between items-center mt-3'>
              <button onClick={() => setShowImageInput(!showImageInput)} className={`px-3 py-1 rounded transition-colors ${showImageInput ? 'bg-blue-100 text-blue-600' : 'text-blue-500 hover:bg-blue-50'}`}  disabled={isLoading} > {showImageInput ? 'Hide mo pakielam ko' : 'Add mona hiya kapa'}
              </button>
              <button onClick={addPost} className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors' disabled={isLoading || !postText.trim()} >
                {isLoading ? 'Posting napo mag hintay ka' : 'Post'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 py-8">wala pang post mag create kana!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLh22WwcNMhz_U18LIg6SDOc6qTy8wh1r96DvupUUf7el6MtH0FarmBcfb6EhBnuGq3Oo&usqp=CAU" alt="Profile" className="w-10 h-10 rounded-full object-cover"/>
                  <div>
                    <div className="font-medium">{post.author || ''}</div>
                    <div className="text-sm text-gray-500">{post.time}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {editingPost === post.id ? (
                    <>
                      <button onClick={() => editPost(post.id)} className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600" > Save</button>
                      <button onClick={() => {setEditingPost(null); setEditText('')}} className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => {setEditingPost(post.id); setEditText(post.caption)}} className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">Edit</button>
                      <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600" >Delete</button>
                    </>
                  )}
                </div>
              </div>  
              <div className="mb-3">
                {editingPost === post.id ? (
                  <textarea value={editText} onChange={(e) => setEditText(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
                ) : (
                  <div className="whitespace-pre-wrap">{post.caption}</div>
                )}
              </div>
              
              {post.imageUrl && (
                <img src={post.imageUrl} alt="Post content"  className="w-full max-h-96 object-cover rounded"  onError={(e: any) => {  e.target.style.display = 'none'
                    console.error('Image failed to load:', e.target.src) }} />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
