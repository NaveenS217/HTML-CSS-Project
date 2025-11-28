import React from 'react'

export default function ContactsTable({ contacts = [], onDelete, onEditStart }) {
  if (!contacts || contacts.length === 0) {
    return <div className="text-muted">No contacts yet. Add some using the form.</div>
  }

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th style={{ width: '30%' }}>Name</th>
            <th style={{ width: '40%' }}>Email</th>
            <th style={{ width: '20%' }}>Mobile</th>
            <th style={{ width: '10%' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, idx) => (
            <tr key={idx}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>
              <td>
                <div className="btn-group" role="group">
                  <button className="btn btn-sm btn-outline-primary" onClick={() => onEditStart(idx)}>Edit</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => {
                    if (confirm(`Delete contact ${c.name}?`)) onDelete(idx)
                  }}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
