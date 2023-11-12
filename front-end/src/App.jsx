import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Index from './Pages/Index';
import Show from './Pages/Show';
import Four0Four from './Pages/Four0Four';
 
import './App.css'

function App() {
  return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/postcards/' element={<Index />} />
					<Route path='/postcards/:id' element={<Show />} />
					<Route path='*' element={<Four0Four />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App
