import React, { useEffect, useState } from 'react'
import ContactForm from './components/ContactForm'
import ContactsTable from './components/ContactsTable'

const STORAGE_KEY = 'contacts_v1'

export default function App() {
  const [contacts, setContacts] = useState([])
  const [editingIndex, setEditingIndex] = useState(null) // null or index
  const [initialValues, setInitialValues] = useState({ name: '', email: '', mobile: '' })

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        setContacts(JSON.parse(raw))
      } catch {
        setContacts([])
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const handleAdd = (contact) => {
    setContacts(prev => [...prev, contact])
  }

  const handleDelete = (index) => {
    setContacts(prev => prev.filter((_, i) => i !== index))
    // if deleting the currently edited record, reset edit mode
    if (editingIndex === index) {
      setEditingIndex(null)
      setInitialValues({ name: '', email: '', mobile: '' })
    }
  }

  const handleEditStart = (index) => {
    setEditingIndex(index)
    setInitialValues(contacts[index])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleUpdate = (updatedContact) => {
    setContacts(prev => prev.map((c, i) => (i === editingIndex ? updatedContact : c)))
    setEditingIndex(null)
    setInitialValues({ name: '', email: '', mobile: '' })
  }

  const handleCancelEdit = () => {
    setEditingIndex(null)
    setInitialValues({ name: '', email: '', mobile: '' })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="card card-form shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{editingIndex === null ? 'Add Contact' : 'Edit Contact'}</h5>

              <ContactForm
                key={editingIndex ?? 'add'} // reset internal state when switching modes
                initialValues={initialValues}
                onAdd={handleAdd}
                onUpdate={handleUpdate}
                editing={editingIndex !== null}
                onCancelEdit={handleCancelEdit}
              />
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Contacts</h5>
              <ContactsTable
                contacts={contacts}
                onDelete={handleDelete}
                onEditStart={handleEditStart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
