export interface Movies {
    year: number;
    week: number;
    date: Date;
    positions: [MoviesPosition];
}

export interface MoviesPosition {
    position: number;
    position_id: number;
    title_id: number;
    label_id: number;
    label: string;
    prev_position: number;
    num_weeks: number;
    num_weeks_cumulative: number;
    title: string;
    credit: string;
    cover_img_url: string;
    cover_img_url_large: string;
    cover_img_url_medium: string;
    cover_img_url_small: string;

}
