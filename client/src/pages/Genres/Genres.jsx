import { useInfiniteQuery } from "@tanstack/react-query";
import { getGenreCollection } from "../../services/discover.services";
import { MediaPoster } from "../../components/MediaPoster/MediaPoster";
import { ClipLoader } from "react-spinners";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageLoadingOverlay } from "../../components/PageLoadingOverlay/PageLoadingOverlay";

export const Genres = () => {
  const { ref, inView } = useInView({ threshold: 1 });
  const { mediaType, genreId } = useParams();

  const query = useInfiniteQuery({
    queryKey: ["collection", "movie", 28, 1],
    queryFn: ({ pageParam = 1 }) =>
      getGenreCollection(mediaType, genreId, pageParam),
    getNextPageParam: (lastPage, pages) => {
      const totalPages =
        import.meta.env.VITE_NODE_ENV === "development"
          ? 2
          : lastPage.total_pages;

      if (pages[pages.length - 1].page !== totalPages) {
        return lastPage.page + 1;
      } else {
        return undefined;
      }
    },
    retry: false,
  });

  const collection = query.data?.pages?.map((page) => {
    return page.results.map((d) => {
      return <MediaPoster key={d.id} data={d} media_type={mediaType} />;
    });
  });

  useEffect(() => {
    if (inView) {
      query.fetchNextPage();
    }
  }, [inView]);

  return (
    <main>
      <PageLoadingOverlay isLoading={query.isLoading}></PageLoadingOverlay>

      <div className=" w-[95%] max-w-[1400px] mx-auto">
        <div className=" min-h-[150vh] grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {collection}
        </div>

        {query.hasNextPage && (
          <div ref={ref} className=" flex items-center justify-center py-2">
            <ClipLoader />
          </div>
        )}
      </div>
    </main>
  );
};
