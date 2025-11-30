ReactDOM.render(
    <div class="fixed flex w-full h-20 bg-[#1a1d1a] top-0 left-0 items-center justify-between shadow-lg">
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
            <ul class="flex h-full items-center hidden md:flex">
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
                          group-hover:scale-110 group-hover:translate-y-[-2px]" href="/pages/fale-conosco.html">
                        FALE CONOSCO
                    </a>
                </li>
            </ul>
        </div>
    </div>,
    document.getElementById('menu')
)
