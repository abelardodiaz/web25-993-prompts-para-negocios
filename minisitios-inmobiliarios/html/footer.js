// Footer compartido
const footerHTML = `
    <footer class="bg-[#0D3B66] text-white py-12 mt-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <!-- Columna 1: Marca -->
                <div>
                    <h3 class="text-2xl font-bold mb-4">casas-picacho.com</h3>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        Somos expertos en conectar personas con su espacio ideal.
                        Gestión profesional y trato personalizado.
                    </p>
                </div>
                <!-- Columna 2: Enlaces -->
                <div>
                    <h4 class="font-bold mb-4 text-[#D45D32]">Explorar</h4>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li><a href="#" class="hover:text-white">Propiedades en Renta</a></li>
                        <li><a href="#" class="hover:text-white">Propiedades en Venta</a></li>
                        <li><a href="#" class="hover:text-white">Nosotros</a></li>
                    </ul>
                </div>
                <!-- Columna 3: Contacto -->
                <div>
                    <h4 class="font-bold mb-4 text-[#D45D32]">Contacto</h4>
                    <ul class="space-y-2 text-sm text-gray-300">
                        <li><i class="fas fa-phone mr-2"></i> (444) 812-3456</li>
                        <li><i class="fas fa-envelope mr-2"></i> contacto@casas-picacho.com</li>
                        <li><i class="fas fa-map-marker-alt mr-2"></i> San Luis Potosí, SLP</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-[#1a4066] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p class="mb-4 md:mb-0">© 2025 casas-picacho.com. Todos los derechos reservados.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-white">Términos y Condiciones</a>
                    <a href="#" class="hover:text-white">Aviso de Privacidad</a>
                </div>
            </div>
        </div>
    </footer>
`;

// Insertar footer en el elemento con id="footer"
document.getElementById('footer').innerHTML = footerHTML;
