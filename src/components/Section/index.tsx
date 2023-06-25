export default function Section() {
  return (
    <div className="overflow-hidden bg-white py-32" id="sobrenos">
      <div className="mx-auto max-w-4xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Sobre nós
            </h2>
            <p className="mt-6 text-base leading-2 text-gray-600">
              A Rede Hortifruti Fartura, nasceu em 28 de março de 2005, na
              cidade de Campinas - Sao Paulo, com o objetivo de proporcionar aos
              clientes, qualidade, variedade e preços baixos com um excelente
              atendimento. No início eram duas lojas, a loja Guanabara e a loja
              Primavera.<br/> Em 2007 conquistamos nossa 3º loja, a loja Paineiras. E
              não paramos de crescer! Em 2009 inauguramos a loja 4, Jd. Paraíso.
              Em 2010, a Rede Hortifruti Fartura visando seus negócios, expandiu
              para a Capital Paulista, sendo nossa loja 5, Jd. Avelino. Hoje
              contamos com 7 lojas para melhor atende-los!
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl my-4">
              Missão
            </h2>
            <p className="mt-6 text-base leading-2 text-gray-600">
            Entendemos que nosso sucesso depende da exclusiva satisfação de nossos clientes. Dessa forma, mantendo nossa máxima qualidade para atender cada vez melhor as necessidades dos nosso clientes, de forma eficiente e eficaz.
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Conheça mais sobre nós <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
