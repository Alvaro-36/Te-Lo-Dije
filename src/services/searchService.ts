interface MetaTag {
  "og:image"?: string;
  "twitter:image"?: string;
  [key: string]: string | undefined;
}

interface CseImageItem {
  src: string;
}

interface CseThumbnailItem {
  src: string;
  width: string;
  height: string;
}

interface Pagemap {
  cse_image?: CseImageItem[];
  cse_thumbnail?: CseThumbnailItem[];
  metatags?: MetaTag[];
}

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
  displayLink: string;
  pagemap?: Pagemap;
}

interface GoogleSearchResponse {
  kind: string;
  items: SearchResult[];
  searchInformation: {
    totalResults: string;
  };
}

export interface fakeResultItem {
  title: string;
  desc: string;
  link: string;
  img: string;
}

export async function searchGoogle(query: string): Promise<GoogleSearchResponse> {
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || '';
  const GOOGLE_SEARCH_ENGINE_ID = process.env.GOOGLE_SEARCH_ENGINE_ID || '';

  if (!GOOGLE_API_KEY || !GOOGLE_SEARCH_ENGINE_ID) {
    throw new Error("Error al cargar variables de entorno");
  }

  const url = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_SEARCH_ENGINE_ID}&q=${encodeURIComponent(query)}`;

  console.log('Buscando en Google:', query);
  console.log('\nRealizando búsqueda...\n');

  try {
    const response = await fetch(url);
    const data = (await response.json()) as any;
    return data as GoogleSearchResponse;
  } catch (error) {
    console.error('Error al realizar la búsqueda:');
    console.error(error);
    throw error;
  }
}

export async function generateSearchPage(
  searchTerm: string, 
  deviceType: string, 
  fakeResults: fakeResultItem[]
): Promise<string> {
  const { getTemplate } = await import('./templateFactory.js');
  const { getImage } = await import('./imageFactory.js');
  const fs = await import('fs/promises');

  const searchResults = await searchGoogle(searchTerm);
  let i = 0;
  let newResults = "";
  
  for(const f of fakeResults){
    console.log(`La ruta de la imagen ${i} es: ${await getImage(f.img)}`);
    newResults = newResults += `<div class="A6K0A" data-rpos="${i}">
                      <div
                        jscontroller="SC7lYd"
                        class="wHYlTd Ww4FFb tF2Cxc asEBEc vt6azd"
                        lang="es"
                        style="max-width: 100%; width: inherit"
                        jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                        data-hveid="CD4QAA"
                        data-ved="2ahUKEwjIhtPg4uWQAxUOrJUCHQTUDiUQFSgAegQIPhAA"
                      >
                        <div class="N54PNb BToiNc" data-snc="pVphj">
                          <div class="kb0PBd A9Y9g jGGQ5e" data-snf="x5WNvb" data-snhf="0">
                            <div class="yuRUbf">
                              <div class="b8lM7">
                                <span class="V9tjod" jsaction="trigger.mLt3mc"
                                  ><a
                                    jsname="UWckNb"
                                    class="zReHs"
                                    href="${f.link}"
                                    data-ved="2ahUKEwjIhtPg4uWQAxUOrJUCHQTUDiUQFnoECDMQAQ"
                                    data-sb="/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=${f.link}"
                                    ><h3
                                      class="LC20lb MBeuO DKV0Md"
                                      id="_N-cQaYiPF47Y1sQPhKi7qAI_66"
                                    >
                                      ${f.title}
                                    </h3>
                                    <br />
                                    <div class="notranslate ESMNde HGLrXd ojE3Fb">
                                      <div class="q0vns">
                                        <span class="DDKf1c"
                                          ><div class="eqA2re UnOTSe Vwoesf" aria-hidden="true">
                                            <img
                                              class="XNo5Ab"
                                              src="${await getImage(f.img)}"
                                              style="height: 26px; width: 26px"
                                              alt=""
                                              data-csiid="N-cQaYiPF47Y1sQPhKi7qAI_8"
                                              data-atf="4"
                                              data-iml="1762715448145"
                                            /></div
                                        ></span>
                                        <div class="CA5RN">
                                          <div><span class="VuuXrf">${(hostname => {
                                            const parts = hostname.split('.');
                                            const main = parts.length > 2 ? parts[1] : parts[0];
                                            return main!=undefined?main.charAt(0).toUpperCase() + main.slice(1):'';
                                          })(new URL(f.link).hostname)}</span></div>
                                          <div class="byrV5b">
                                            <cite class="qLRx3b tjvcx GvPZzd cHaqb" role="text"
>${f.link}<span
                                                class="ylgVCe ob9lvb"
                                                role="text"
                                              >
</span
                                              ></cite
                                            >
                                          </div>
                                        </div>
                                      </div>
                                    </div></a
                                  ></span
                                >
                                <div class="B6fmyf byrV5b Mg1HEd">
                                  <div class="HGLrXd ojE3Fb">
                                    <div class="q0vns">
                                      <span class="DDKf1c"
                                        ><div
                                          class="eqA2re UnOTSe"
                                          style="height: 26px; width: 26px"
                                        ></div
                                      ></span>
                                      <div class="CA5RN">
                                        <div><span class="VuuXrf">Wikipedia</span></div>
                                        <div class="byrV5b">
                                          <cite class="qLRx3b tjvcx GvPZzd cHaqb" role="text"
                                              >${f.link}<span
                                              class="ylgVCe ob9lvb"
                                              role="text"
                                            >
                                              </span
                                            ></cite
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="csDOgf BCF2pd ezY6nb L48a4c">
                                    <div
                                      id="_N-cQaYiPF47Y1sQPhKi7qAI_72"
                                      jsdata="l7Bhpb;_;N-cQaYiPF47Y1sQPhKi7qAI26"
                                      jscontroller="i8S0p"
                                      data-id="atritem-${f.link}"
                                      jsslot=""
                                      jsaction="rcuQ6b:npT2md;h5M12e"
                                      data-ved="2ahUKEwjIhtPg4uWQAxUOrJUCHQTUDiUQ2esEegQIMxAJ"
                                    >
                                      <div
                                        class="MJ8UF iTPLzd rNSxBe eY4mx lUn2nc"
                                        aria-describedby="_N-cQaYiPF47Y1sQPhKi7qAI_66"
                                        style="position: absolute"
                                        aria-label="Acerca de este resultado"
                                        role="button"
                                        tabindex="0"
                                      >
                                        <span class="D6lY4c"
                                          ><span
                                            class="xTFaxe z1asCe"
                                            style="height: 18px; line-height: 18px; width: 18px"
                                            ><svg
                                              focusable="false"
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                              ></path></svg></span
                                        ></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="kb0PBd A9Y9g" data-snf="nke7rc" data-sncf="1">
                            <div
                              class="VwiC3b yXK7lf p4wth r025kc Hdw6tb"
                              style="-webkit-line-clamp: 2"
                            >
                              <span>${f.desc}...</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>` 

    i++;
  }
  
  const template = getTemplate(deviceType);
  
  for (const s of searchResults.items) {      
    const imageUrl = s.pagemap?.cse_thumbnail?.[0]?.src || s.pagemap?.cse_thumbnail?.[1]?.src || s.pagemap?.cse_image?.[0]?.src || s.pagemap?.cse_image?.[1]?.src;
    
    newResults += `<div class="A6K0A" data-rpos="${i}">
                      <div
                        jscontroller="SC7lYd"
                        class="wHYlTd Ww4FFb tF2Cxc asEBEc vt6azd"
                        lang="es"
                        style="max-width: 100%; width: inherit"
                        jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c"
                        data-hveid="CD4QAA"
                        data-ved="2ahUKEwjIhtPg4uWQAxUOrJUCHQTUDiUQFSgAegQIPhAA"
                      >
                        <div class="N54PNb BToiNc" data-snc="pVphj">
                          <div class="kb0PBd A9Y9g jGGQ5e" data-snf="x5WNvb" data-snhf="0">
                            <div class="yuRUbf">
                              <div class="b8lM7">
                                <span class="V9tjod" jsaction="trigger.mLt3mc"
                                  ><a
                                    jsname="UWckNb"
                                    class="zReHs"
                                    href="${s.link}"
                                    data-ved="2ahUKEwjIhtPg4uWQAxUOrJUCHQTUDiUQFnoECDMQAQ"
                                    data-sb="/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=${s.link}"
                                    ><h3
                                      class="LC20lb MBeuO DKV0Md"
                                      id="_N-cQaYiPF47Y1sQPhKi7qAI_66"
                                    >
                                      ${s.title}
                                    </h3>
                                    <br />
                                    <div class="notranslate ESMNde HGLrXd ojE3Fb">
                                      <div class="q0vns">
                                        <span class="DDKf1c"
                                          ><div class="eqA2re UnOTSe Vwoesf" aria-hidden="true">
                                            <img
                                              class="XNo5Ab"
                                              src="${imageUrl}"
                                              style="height: 26px; width: 26px"
                                              alt=""
                                              data-csiid="N-cQaYiPF47Y1sQPhKi7qAI_8"
                                              data-atf="4"
                                              data-iml="1762715448145"
                                            /></div
                                        ></span>
                                        <div class="CA5RN">
                                          <div><span class="VuuXrf">
                                            ${(hostname => {
                                              const parts = hostname.split('.');
                                              const main = parts.length > 2 ? parts[1] : parts[0];
                                              return main ? main.charAt(0).toUpperCase() + main.slice(1) : hostname;
                                            })(new URL(s.link).hostname)}
                                          </span></div>
                                          <div class="byrV5b">
                                            <cite class="qLRx3b tjvcx GvPZzd cHaqb" role="text">${s.displayLink}<span
                                                class="ylgVCe ob9lvb"
                                                role="text"></span></cite>
                                          </div>
                                        </div>
                                      </div>
                                    </div></a
                                  ></span
                                >
                                <div class="B6fmyf byrV5b Mg1HEd">
                                  <div class="HGLrXd ojE3Fb">
                                    <div class="q0vns">
                                      <span class="DDKf1c"
                                        ><div
                                          class="eqA2re UnOTSe"
                                          style="height: 26px; width: 26px"
                                        ></div
                                      ></span>
                                      <div class="CA5RN">
                                        <div><span class="VuuXrf">Wikipedia</span></div>
                                        <div class="byrV5b">
                                          <cite class="qLRx3b tjvcx GvPZzd cHaqb" role="text"
>${s.link}<span
                                              class="ylgVCe ob9lvb"
                                              role="text"
                                            >
                                              </span
                                            ></cite
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="csDOgf BCF2pd ezY6nb L48a4c">
                                    <div
                                      id="_N-cQaYiPF47Y1sQPhKi7qAI_72"
                                      jsdata="l7Bhpb;_;N-cQaYiPF47Y1sQPhKi7qAI26"
                                      jscontroller="i8S0p"
                                      data-id="atritem-${s.link}"
                                      jsslot=""
                                      jsaction="rcuQ6b:npT2md;h5M12e"
                                      data-ved="2ahUKEwjIhtPg4uWQAxUOrJUCHQTUDiUQ2esEegQIMxAJ"
                                    >
                                      <div
                                        class="MJ8UF iTPLzd rNSxBe eY4mx lUn2nc"
                                        aria-describedby="_N-cQaYiPF47Y1sQPhKi7qAI_66"
                                        style="position: absolute"
                                        aria-label="Acerca de este resultado"
                                        role="button"
                                        tabindex="0"
                                      >
                                        <span class="D6lY4c"
                                          ><span
                                            class="xTFaxe z1asCe"
                                            style="height: 18px; line-height: 18px; width: 18px"
                                            ><svg
                                              focusable="false"
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                                              ></path></svg></span
                                        ></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="kb0PBd A9Y9g" data-snf="nke7rc" data-sncf="1">
                            <div
                              class="VwiC3b yXK7lf p4wth r025kc Hdw6tb"
                              style="-webkit-line-clamp: 2"
                            >
                              <span>${s.snippet}...</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`

    i++;
  }

  const templateHTML = await fs.readFile(template, 'utf-8');
  const finalHTML = templateHTML
    .replace("<!-- AGREGAR ACA LOS RESULTADOS-->", newResults)
    .replace("__TEXTO_BUSCADO__", searchTerm);
  
  return finalHTML;
}
