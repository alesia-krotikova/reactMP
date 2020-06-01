import React from 'react';

import css from './SectionStatus.scss';

type SectionStatus = {
  search?: number;
  genre: string;
  toggler: React.ReactNode;
};

export function SectionStatus ({ search, genre, toggler }: SectionStatus) {
 return (
   <div className={css.container}>
     <div className={css.wrap}>
       <span>
         {search > 0 && !genre && `${search} movies found`}
         {genre && `Films by ${genre} genre`}
       </span>
       {toggler}
     </div>
   </div>
 );
}
