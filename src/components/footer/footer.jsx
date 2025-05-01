export function Footer() {
  return (
    <footer className="bg-primary border-t-2 border-accent py-8 mt-[10%]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section>
            <h3 className="font-tittle text-lg text-accent mb-4">Horario</h3>
            <p className="font-body">Lunes a Viernes: 12:00 - 23:00</p>
            <p className="font-body">Sábado y Domingo: 11:00 - 00:00</p>
          </section>
          <section>
            <h3 className="font-tittle text-lg text-accent mb-4">Contacto</h3>
            <p className="font-body">Calle Principal 123</p>
            <p className="font-body">+54 1150500250</p>
            <p className="font-body">restautante@info.com</p>
          </section>
          <section className="flex flex-col">
            <h3 className="font-tittle text-lg text-accent mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="about:blak"
                target="blank"
                className="text-text hover:text-accent transition"
              >
                Instagram
              </a>
              <a
                href="about:blak"
                target="blank"
                className="text-text hover:text-accent transition"
              >
                Facebook
              </a>
            </div>
          </section>
        </div>
        <div className="mt-8 pt-4 border-t border-secondary text-center text-sm text-text">
          © 2025 Restaurante. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
