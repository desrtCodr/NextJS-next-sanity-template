export default function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center fixed bottom-0 w-full">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Next JS Sanity Sandbox
      </p>
    </footer>
  )
}
