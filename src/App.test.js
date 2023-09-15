import { render, screen } from '@testing-library/react';
import { RouterProvider, Route, Routes, createMemoryRouter, MemoryRouter } from "react-router-dom";
import InternalRoutes from './Lib/Routes';
import RepoContextProvider from './Contexts/RepoContext';
import Details from './Pages/Details';
import React from "react"

test('renders home page', async () => {
  const memoryRouter = createMemoryRouter(InternalRoutes)
  render(
    <React.StrictMode>
      <RepoContextProvider>
        <RouterProvider router={memoryRouter} fallbackElement={<div>Loading...</div>} />
      </RepoContextProvider>
    </React.StrictMode>
  );

  const listNodes = await screen.findAllByText('View Details', {}, {
    timeout: 10000,
    interval: 10000,
  });
  expect(listNodes[0]).toBeInTheDocument();
});

test('renders details', async () => {
  render(
    <React.StrictMode>
      <RepoContextProvider>
        <MemoryRouter initialEntries={["/details/4967118"]}>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </MemoryRouter>
      </RepoContextProvider>
    </React.StrictMode>
  )

  const listNode = await screen.findByText('Goto Github Repository', {}, {
    timeout: 10000,
    interval: 10000,
  });

  expect(listNode).toBeInTheDocument()
});