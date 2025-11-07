import Header from "./Header";
import Nav from "./Nav";
import List from "./Lista";
import Item from "./Item";
import Link from "./Link";

function App() {
  return (
    <>
      <Header style='
      w-[100%] 
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
          hover:duration-100 hover:ease-in hover:text-yellow-500
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
    </>
  );
}

export default App;
