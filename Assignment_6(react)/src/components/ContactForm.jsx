import React, { useEffect, useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const mobileRegex = /^[0-9]{10}$/

export default function ContactForm({ initialValues = { name: '', email: '', mobile: '' }, onAdd, onUpdate, editing, onCancelEdit }) {
  const [name, setName] = useState(initialValues.name || '')
  const [email, setEmail] = useState(initialValues.email || '')
  const [mobile, setMobile] = useState(initialValues.mobile || '')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setName(initialValues.name || '')
    setEmail(initialValues.email || '')
    setMobile(initialValues.mobile || '')
    setErrors({})
  }, [initialValues])

  const validate = () => {
    const err = {}
    if (!name.trim()) err.name = 'Name is required'
    if (!email.trim()) err.email = 'Email is required'
    else if (!emailRegex.test(email)) err.email = 'Invalid email'
    if (!mobile.trim()) err.mobile = 'Mobile is required'
    else if (!mobileRegex.test(mobile)) err.mobile = 'Mobile must be 10 digits'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const clearForm = () => {
    setName('')
    setEmail('')
    setMobile('')
    setErrors({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const contact = { name: name.trim(), email: email.trim(), mobile: mobile.trim() }
    if (editing) {
      onUpdate(contact)
    } else {
      onAdd(contact)
      clearForm()
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input className={`form-control ${errors.name ? 'is-invalid' : ''}`} value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Mobile</label>
        <input className={`form-control ${errors.mobile ? 'is-invalid' : ''}`} value={mobile} onChange={(e) => setMobile(e.target.value)} />
        {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {editing ? 'Update' : 'Add'}
        </button>

        {editing ? (
          <button type="button" onClick={onCancelEdit} className="btn btn-secondary">
            Cancel
          </button>
        ) : (
          <button type="button" onClick={clearForm} className="btn btn-outline-secondary">
            Clear
          </button>
        )}
      </div>
    </form>
  )
}
