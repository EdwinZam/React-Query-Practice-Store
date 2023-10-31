
import { useQuery } from '@tanstack/react-query';
import { productActions } from '..';

interface Options {
    filterKey?: string;
}

export const useProducts = ({ filterKey }: Options) => {

    const { data:products = [], error, isLoading, isError, isFetching } = 
    useQuery({
        queryKey: ['products', {filterKey}],
        queryFn: () => productActions.getProducts({filterKey}),
        staleTime: 1000 * 60 * 60,
    });
    return{
        products,
        error,
        isLoading,
        isError,
        isFetching
    }
}
