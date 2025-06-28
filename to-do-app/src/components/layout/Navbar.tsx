import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";


export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5 justify-between">
            <div className="flex items-center">
                <span className="font-bold ml-2">Task</span>Master
            </div>
            <Link to="/">Tasks</Link>
            <Link to="/users">Users</Link>
            <div className="ml-auto">
                <ModeToggle />
            </div>
        </nav>
    )
}


// 100*29=2900
// 500*22=11000
// ------------
//       =13900