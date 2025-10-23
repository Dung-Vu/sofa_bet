export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <img src="/logo.jpeg" alt="Ordinaire logo" className="h-10 w-auto" />
        <p className="text-sm sm:text-base text-primary-foreground/80 text-center sm:text-left">
          Bobby Sofa Pet — được chế tác tại Việt Nam dành cho thú cưng xứng đáng được yêu thương thực sự.
        </p>
        <a
          href="https://ordinairevietnam.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base font-semibold underline decoration-transparent hover:decoration-current transition"
        >
          ordinairevietnam.com
        </a>
      </div>
    </footer>
  )
}
