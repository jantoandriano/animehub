'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import "./index.css"

const SearchInput = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');

        event.preventDefault()
        if (event.target.value) {
            params.set('q', event.target.value);
        } else {
            params.delete('q');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 200)

    return (
        <form className="search-container">
            <label htmlFor="default-search" className="search-label">Search</label>
            <div className="relative">
                <div className="search-svg-container">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    defaultValue={searchParams.get('q')?.toString()}
                    onChange={handleSearch} type="search" id="default-search" className="search-input" placeholder="Search your fav anime..." required />
                <button type="submit" className="search-button">Search</button>
            </div>
        </form>

    )
}

export default SearchInput