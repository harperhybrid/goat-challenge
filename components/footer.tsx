export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} GOAT Challenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
