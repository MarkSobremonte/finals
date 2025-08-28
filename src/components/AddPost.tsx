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

      console.log('Token exists:', !!token)
      console.log('Sending data:', { caption: postText, imageUrl: imageUrl })
      
      const response = await axios.post('http://127.0.0.1:8000/api/posts', {
        caption: postText,
        imageUrl: imageUrl || undefined
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      console.log('API Response:', response.data)
      
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
      if (error.response) {
        console.error('Error status:', error.response.status)
        console.error('Error data:', error.response.data)
        
        if (error.response.status === 401) {
          alert('Authentication failed kaya mag login kana.')
        } else if (error.response.status === 422) {
          alert('Invalid data ngani check mo data.')
        } else {
          alert(`Failed to add post: ${error.response.data?.message || 'Unknown error'}`)
        }
      } else {
        alert('error nganii')
      }
    } finally {
      setIsLoading(false)
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
      
      console.log('Deleting post ID:', postId)
      
      await axios.delete(`http://127.0.0.1:8000/api/posts/${postId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      
      setPosts(posts.filter((post) => post.id !== postId))
      alert('Sumakses')
    } catch (error: any) {
      console.error('Delete error:', error)
      if (error.response?.status === 401) {
        alert('mag login ka ulit')
      } else if (error.response?.status === 404) {
        alert('walang makitang post')
      } else {
        alert('failed daw sabi ni system')
      }
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiz5Lt3rjcmo1vOl5LuclZj1Na2-eb3X2QA&s" alt="Profile" className='w-12 h-12 rounded-full object-cover'/>
          <div className="flex-1">
            <textarea 
              placeholder="ano ang iyong nasa isipan" className='w-full p-3 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500' value={postText} onChange={(e) => setPostText(e.target.value)} disabled={isLoading}/>
            {showImageInput && (
              <div className="mt-3">
                <input 
                  type="url" placeholder="lagay mo dito URL" className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} disabled={isLoading}/>
                {imageUrl && isValidImageUrl(imageUrl) && (
                  <img  src={imageUrl} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded border" onError={(e: any) => { e.target.style.display = 'none'}}/>
                )}
                {imageUrl && !isValidImageUrl(imageUrl) && (
                  <p className="mt-2 text-red-500 text-sm">Please enter a valid image URL</p>
                )}
              </div>
            )}
            
            <div className='flex justify-between items-center mt-3'>
              <button onClick={() => setShowImageInput(!showImageInput)} className={`px-3 py-1 rounded transition-colors ${showImageInput ? 'bg-blue-100 text-blue-600' : 'text-blue-500 hover:bg-blue-50'}`} disabled={isLoading}>{showImageInput ? 'Hide mo pakielam ko' : 'Add mona hiya kapa'}</button>
              
              <button onClick={addPost} className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors' disabled={isLoading || !postText.trim()}>
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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFiz5Lt3rjcmo1vOl5LuclZj1Na2-eb3X2QA&s" alt="Profile" className="w-10 h-10 rounded-full object-cover"/>
                  <div>
                    <div className="font-medium">{post.author || 'Mark'}</div>
                    <div className="text-sm text-gray-500">{post.time}</div>
                  </div>
                </div>
                <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-500 transition-colors">
                  Delete
                </button>
              </div>
              <div className="mb-3 whitespace-pre-wrap">
                {post.caption}
              </div>
              {post.imageUrl && (
                <img src={post.imageUrl} alt="Post content" className="w-full max-h-96 object-cover rounded" onError={(e: any) => { e.target.style.display = 'none'}}/>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
