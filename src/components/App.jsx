import Header from "./Header";
import Nav from "./Nav";
import List from "./Lista";
import Item from "./Item";
import Link from "./Link";
import Button from './Button'
import Div from './Div'
import Imagem from './Imagem'
import Main from './Main'
import Paragrafo from './Paragrafo'
import Section from './Section'
import Span from './Span'
import Titulos from './Titulos'

function App() {
  return (
    <>
      <Header style='
      w-full
      flex flex-row 
      bg-black text-white
      px-[12.5rem] py-[1rem]
      '>

        <Nav style='
        w-[100%]
        flex flex-row items-center justify-between
        
        
        '>

          <Link 
          link='#'
          style='text-[2rem] font-bold italic 
          hover:duration-200 hover:ease-in hover:text-yellow-500
          tracking-[0.2rem]'
          texto= 'BIKARTE'/>

          <List style='
          gap-6
          flex flex-row items-center justify-between
          '>
            <Item>
              <Link 
              link='#'
              style='
              hover:border-b-3 hover:border-yellow-500
              hover:duration-300 hover:ease-in hover:text-[1.1rem]
              uppercase font-bold
              p-1
              '
              texto='Modelos'
              />
            </Item>

            <Item>
              <Link 
              link='#'
              style='
              hover:border-b-3 hover:border-yellow-500
              hover:duration-300 hover:ease-in hover:text-[1.1rem]
              uppercase font-bold
              p-1
              '
              texto='Contato'
              />
            </Item>

            <Item>
              <Link 
              link='#'
              style='
              hover:border-b-3 hover:border-yellow-500
              hover:duration-300 hover:ease-in hover:text-[1.1rem]
              uppercase font-bold
              p-1
              '
              texto='Sobre'
              />
            </Item>
          </List>

        </Nav>

      </Header>

      <Main
      style='
      w-full
      
      '
      >

        <Section
        style='flex flex-row
        justify-between gap-[2rem]
        bg-black text-white
        px-[12.5rem] 
        w-full h-[29rem] 
        '
        >

          <Div
          style='flex flex-col items-start
          gap-3 justify-center
          w-[50%]
          
          '
          >

            <Titulos
            style='text-[3rem] font-bold
            leading-15
            ' 
            >

              <Span
              text='Bicicletas feitas sob medida'
              style='text-yellow-300'
              />
              
            </Titulos>


            <Paragrafo
            text='Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você. Explore o mundo na sua velocidade com a Bikarte.'
            style='text-gray-300 text-[1.25rem]
            leading-5'
            />

            <Button
            text='Escolha a Sua'
            style='uppercase bg-amber-300 text-black font-bold
            p-2 rounded hover:bg-amber-600 duration-150
            '
            />

          </Div>


          <Div style='h-[35rem] w-[50%]
          flex  justify-end
          '>

            <Imagem
            url='src\assets\bike-section1.jpg'
            alt='Bicicleta'
            style='w-[100%]'
            />

          </Div>

        </Section>

      </Main>
    </>
  );
}

export default App;
