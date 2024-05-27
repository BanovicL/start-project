
export default function convertEntry(entry) {
    return {
        id: entry.uid,
        firstname: entry.firstname,
        lastname: entry.lastname,
        position: entry.position,
        email: entry.email,
        address: entry.address
    }
}