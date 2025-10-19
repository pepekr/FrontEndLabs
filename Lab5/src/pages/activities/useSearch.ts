import { useState } from "react";
import { activitiesObj } from "../../activitiesObject";


export default function useSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    
      const handleSearch = (term: string) => {
        setSearchTerm(term);
        const keys = Object.keys(activitiesObj);
        const matched = keys.find((k) =>
          k.toLowerCase().includes(term.toLowerCase())
        );
    
        if (matched) {
          const htmlId =
            activitiesObj[matched as keyof typeof activitiesObj] as string;
            const id  = htmlId.split("#")[1]
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            element.classList.add("highlight");
            setTimeout(() => element.classList.remove("highlight"), 1000);
          }
        } else if (term) {
          alert("За вашим запитом нічого не знайдено");
        }
      };
  return (
    {
        searchTerm, handleSearch
    }
  )
}
