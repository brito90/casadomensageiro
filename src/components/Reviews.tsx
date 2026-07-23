import { useState } from 'react'

interface Review {
  id: number
  name: string
  rating: number
  date: string
  comment: string
  helpful: number
  avatar: string
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: 'Maria S.',
    rating: 5,
    date: '2026-07-15',
    comment: 'Produto incrível! Chegou bem embalado e a qualidade superou minhas expectativas. Recomendo demais!',
    helpful: 23,
    avatar: '👩',
  },
  {
    id: 2,
    name: 'João P.',
    rating: 5,
    date: '2026-07-10',
    comment: 'Já é a terceira vez que compro. Sempre excelente qualidade e atendimento. Parabéns!',
    helpful: 18,
    avatar: '👨',
  },
  {
    id: 3,
    name: 'Ana R.',
    rating: 4,
    date: '2026-07-05',
    comment: 'Muito bom produto. Entrega um pouco demorada, mas valeu a pena esperar.',
    helpful: 12,
    avatar: '👩‍🦰',
  },
  {
    id: 4,
    name: 'Carlos M.',
    rating: 5,
    date: '2026-06-28',
    comment: 'Perfeito para presentear. Comprei para minha mãe e ela amou!',
    helpful: 15,
    avatar: '🧔',
  },
]

function Reviews() {
  const [reviews, setReviews] = useState(initialReviews)
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' })
  const [showForm, setShowForm] = useState(false)

  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const review: Review = {
      id: reviews.length + 1,
      name: 'Você',
      rating: newReview.rating,
      date: new Date().toISOString().split('T')[0],
      comment: newReview.comment,
      helpful: 0,
      avatar: '👤',
    }
    setReviews([review, ...reviews])
    setNewReview({ rating: 5, comment: '' })
    setShowForm(false)
  }

  const handleHelpful = (id: number) => {
    setReviews(reviews.map(r => 
      r.id === id ? { ...r, helpful: r.helpful + 1 } : r
    ))
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-heading font-bold text-primary">Avaliações</h3>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-primary text-sm"
        >
          {showForm ? 'Cancelar' : 'Avaliar'}
        </button>
      </div>

      {/* Summary */}
      <div className="flex items-center gap-6 mb-6 pb-6 border-b">
        <div className="text-center">
          <div className="text-5xl font-bold text-primary">{averageRating.toFixed(1)}</div>
          <div className="flex items-center gap-1 mt-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className={`w-4 h-4 ${i <= Math.round(averageRating) ? 'text-accent' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">{reviews.length} avaliações</p>
        </div>
        <div className="flex-1">
          {[5,4,3,2,1].map(star => {
            const count = reviews.filter(r => r.rating === star).length
            const percentage = (count / reviews.length) * 100
            return (
              <div key={star} className="flex items-center gap-2 text-sm">
                <span className="w-8 text-gray-600">{star}★</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: `${percentage}%` }}></div>
                </div>
                <span className="w-8 text-gray-500 text-right">{count}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* New Review Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-4 mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Sua avaliação</label>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setNewReview({...newReview, rating: i})}
                  className="text-2xl"
                >
                  {i <= newReview.rating ? '⭐' : '☆'}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Seu comentário</label>
            <textarea
              required
              value={newReview.comment}
              onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
              placeholder="Conte sua experiência..."
            />
          </div>
          <button type="submit" className="btn-primary">
            Enviar Avaliação
          </button>
        </form>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 last:border-0">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-xl">
                {review.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-primary">{review.name}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
                <button
                  onClick={() => handleHelpful(review.id)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary mt-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  Útil ({review.helpful})
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
