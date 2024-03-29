/* eslint-disable react/prop-types */
export default function ContactList({
    selectedContact,
    contacts,
    onSelect
  }) {
    return (
      <section className="contact-list">
        <ul>
          {contacts.map(contact =>
            <li key={contact.id}>
              <button 
              className="bg-gray-400 px-3 py-1 mt-2 rounded-sm"
               onClick={() => {
                onSelect(contact);
              }}>
                {contact.name}
              </button>
            </li>
          )}
        </ul>
      </section>
    );
  }
  