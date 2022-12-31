import { MarsRover } from 'components/LaboComponents/NasaAPI/MarsRover/MarsRover';
import { NasaPod } from 'components/LaboComponents/NasaAPI/NASAPOD.tsx/NasaPOD';
import { Pokemon } from 'components/LaboComponents/Pokemon_basic/Pokemon/pokemon';
import { QuizApp } from 'components/LaboComponents/Quiz/QuizApp/QuizApp';
import { RandomJoke } from 'components/LaboComponents/RandomJoke/RandomJoke';
import ShoppingList from 'components/LaboComponents/ShoppingList/ShoppingList/ShoppingList';
import SlotMachine from 'components/LaboComponents/Slots_Game/SlotMachine/SlotMachine';
import { StateExercises } from 'components/LaboComponents/StateExercises/StateExercises';
import { TicTacToe } from 'components/LaboComponents/TicTacToe/TicTacToe';
import ToDoApp from 'components/LaboComponents/ToDo-App/ToDoApp';
import { Projects } from 'Pages/Projects/Projects';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import { About } from '../Pages/About/About';
import { Contact } from '../Pages/Contact/Contact';
import { Experience } from '../Pages/Experience/Experience';
import { Root } from './Root';

export const BrowserRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "",
                    element: <About/>
                },
                {
                    path: "Projects",
                    element: <Projects/>
                },
                {
                    path: "Projects/slotmachine",
                    element: <SlotMachine></SlotMachine>
                },
                {
                    path: "Projects/quiz",
                    element: <QuizApp></QuizApp>
                },  {
                    path: "Projects/toDo",
                    element: <ToDoApp></ToDoApp>
                },
                {
                    path: "Projects/shoppinglist",
                    element: <ShoppingList></ShoppingList>
                },
                {
                    path: "Projects/randomjoke",
                    element:  <RandomJoke></RandomJoke> 
                },
                {
                    path: "Projects/pokedex",
                    element: <Pokemon limit={15}></Pokemon> 
                },
                {
                    path: "Projects/tictactoe",
                    element:  <TicTacToe></TicTacToe>  
                },
                {
                    path: "Projects/state_exercises",
                    element: <StateExercises></StateExercises> 
                },
                {
                    path: "Projects/nasapod",
                    element: <NasaPod></NasaPod>  
                },
                {
                    path: "Projects/NasaMarsRover",
                    element: <MarsRover></MarsRover>
                },
                {
                    path: "Experience",
                    element: <Experience/>
                },
                {
                    path: "Contact",
                    element: <Contact/>
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
