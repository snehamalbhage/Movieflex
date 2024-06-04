import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const genres = [
  { name: 'All', id: 'all' },
  { name: 'Action', id: '28' },
  { name: 'Comedy', id: '35' },
  { name: 'Horror', id: '27' },
  { name: 'Drama', id: '18' },
  { name: 'Sci-Fi', id: '878' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = ({ onGenreSelect }) => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-red-600">MOVIEFIX</h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {genres.map((genre) => (
                      <button
                        key={genre.id}
                        onClick={() => onGenreSelect(genre.id)}
                        className={classNames(
                          'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        {genre.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex sm:hidden">
                {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button> */}
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {genres.map((genre) => (
                <Disclosure.Button
                  key={genre.id}
                  as="button"
                  onClick={() => onGenreSelect(genre.id)}
                  className={classNames(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                >
                  {genre.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}

          <div className="block sm:hidden bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="flex space-x-4 overflow-x-auto">
                {genres.map((genre) => (
                  <a
                    key={genre.id}
                    href="#"
                    onClick={() => onGenreSelect(genre.id)}
                    className={classNames(
                      'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                  >
                    {genre.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
