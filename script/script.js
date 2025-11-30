ReactDOM.render(
    <div class="fixed flex w-full h-20 bg-[#1a1d1a] top-0 left-0 items-center justify-between shadow-lg">
        <div class="flex items-center py-2 pl-8 text-center gap-2 transition duration-300 hover:scale-110">
            <img class=""
                src="https://img.icons8.com/?size=40&id=813&format=png&color=aec80d" />
            <h1 class="text-[#aec80d] font-bold text-3xl">PACE METER</h1>
        </div>

        <div class="h-full">
            <ul class="flex h-full items-center">
                <li class="group flex items-center h-full text-center font-bold text-[#aec80d] border-b-4 border-transparent px-4 
                       transition-all duration-300 hover:border-[#aec80d]">
                    <a class="h-full flex items-center transition-all duration-300 
                          group-hover:scale-110 group-hover:translate-y-[-2px]" href="./teste/">
                        SOBRE NÓS
                    </a>
                </li>

                <li class="group flex items-center h-full text-center font-bold text-[#aec80d] border-b-4 border-transparent px-4 
                       transition-all duration-300 hover:border-[#aec80d]">
                    <a class="h-full flex items-center transition-all duration-300 
                          group-hover:scale-110 group-hover:translate-y-[-2px]" href="./teste/">
                        FALE CONOSCO
                    </a>
                </li>
            </ul>
        </div>
    </div>,
    document.getElementById('menu')
)
