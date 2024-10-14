import { JobsCard, SearchBar } from "./components";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

function App() {
  return (
    <main className="mx-5">
      <MaxWidthWrapper>
        <SearchBar />
        <JobsCard />
      </MaxWidthWrapper>
    </main>
  );
}

export default App;
