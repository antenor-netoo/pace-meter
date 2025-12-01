ReactDOM.render(
    <div class="fixed flex w-full h-20 bg-[#1a1d1a] top-0 left-0 items-center justify-between shadow-lg z-50">
        <div>
            <a href="/index.html" class="flex items-center py-2 pl-8 text-center gap-2 transition duration-300 hover:scale-110">
                <img src="https://img.icons8.com/?size=40&id=813&format=png&color=aec80d" />
                <h1 class="text-[#aec80d] font-bold md:text-3xl">PACE METER</h1>
            </a>
        </div>

        <div class="h-full">
            <div class="flex h-full items-center md:hidden pr-4">
                <img src="https://img.icons8.com/?size=30&id=36389&format=png&color=aec80d" />
            </div>
            <ul class="hidden h-full items-center md:flex">
                <li class="group flex items-center h-full text-center font-bold text-[#aec80d] border-b-4 border-transparent px-4 
                       transition-all duration-300 hover:border-[#aec80d]">
                    <a class="h-full flex items-center transition-all duration-300 
                          group-hover:scale-110 group-hover:translate-y-[-2px]" href="/pages/sobre-nos.html">
                        SOBRE NÓS
                    </a>
                </li>
                <li class="group flex items-center h-full text-center font-bold text-[#aec80d] border-b-4 border-transparent px-4 
                       transition-all duration-300 hover:border-[#aec80d]">
                    <a class="h-full flex items-center transition-all duration-300 
                          group-hover:scale-110 group-hover:translate-y-[-2px]" href="/pages/nossos-precos.html">
                        NOSSOS PREÇOS
                    </a>
                </li>

                <li class="group flex items-center h-full text-center font-bold text-[#aec80d] border-b-4 border-transparent px-4 
                       transition-all duration-300 hover:border-[#aec80d]">
                    <a class="h-full flex items-center transition-all duration-300 
                          group-hover:scale-110 group-hover:translate-y-[-2px]" href="/pages/fale-conosco.html">
                        FALE CONOSCO
                    </a>
                </li>
            </ul>
        </div>
    </div>,
    document.getElementById('menu')
)

ReactDOM.render(
    <footer class="w-full bg-[#1a1d1a] text-gray-300 py-12 border-t border-[#aec80d]/20">
        <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div class="hidden md:block">
                <div class="flex items-center gap-2 mb-4">
                    <img src="https://img.icons8.com/?size=40&id=813&format=png&color=aec80d" />
                    <h1 class="text-[#aec80d] font-bold text-2xl">PACE METER</h1>
                </div>

                <p class="text-gray-400 leading-relaxed">
                    Sua plataforma para acompanhar métricas de corrida, caminhada, ciclismo e trilha,
                    reunidas em um só lugar para ajudar você a evoluir com clareza e motivação.
                </p>
            </div>
            <div class="flex flex-col items-start md:items-center">
                <h2 class="text-[#aec80d] font-bold text-xl mb-4">Navegação</h2>
                <ul class="flex flex-row md:block justify-between w-full md:w-auto md:justify-center">
                    <li class="flex items-center justify-center">
                        <a href="/pages/sobre-nos.html" class="hover:text-[#aec80d] transition duration-300">
                            Sobre nós
                        </a>
                    </li>
                     <li class="flex items-center justify-center">
                        <a href="/pages/nossos-precos.html" class="hover:text-[#aec80d] transition duration-300">
                            Nossos preços
                        </a>
                    </li>
                     <li class="flex items-center justify-center">
                        <a href="/pages/fale-conosco.html" class="hover:text-[#aec80d] transition duration-300">
                            Fale conosco
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col items-start md:items-end">
                <h2 class="text-[#aec80d] font-bold text-xl mb-4">Contato</h2>

                <p class="text-gray-400">Email: suporte@pacemeter.com</p>
                <p class="text-gray-400 mb-4">Telefone: (00) 0000-0000</p>

                <div class="flex gap-4 mt-2">
                    <a href="#" class="hover:scale-110 transition">
                        <img src="https://img.icons8.com/?size=40&id=118497&format=png&color=aec80d" class="h-8" />
                    </a>
                    <a href="#" class="hover:scale-110 transition">
                        <img src="https://img.icons8.com/?size=40&id=13963&format=png&color=aec80d" class="h-8" />
                    </a>
                    <a href="#" class="hover:scale-110 transition">
                        <img src="https://img.icons8.com/?size=40&id=114441&format=png&color=aec80d" class="h-8" />
                    </a>
                </div>
            </div>
        </div>
        <div class="mt-10 border-t border-[#aec80d]/10 pt-6 text-center text-gray-500 text-sm">
            © 2025 PACE METER — Todos os direitos reservados.
        </div>
    </footer>
    ,
    document.getElementById('footer')
)

