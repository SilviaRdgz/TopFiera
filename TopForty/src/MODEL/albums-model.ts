export interface Albums {
    year: number,
    week: number,
    date: Date,
    positions: [Top40AlbumPositions];
}

export interface Top40AlbumPositions {
    position: number,
    position_id: number,
    title_id: number,
    label_id: number,
    label: string,
    prev_position: number,
    num_weeks: number,
    num_weeks_cumulative: number,
    title: string,
    credit: string,
    cover_img_url: string,
    cover_img_url_large: string,
    cover_img_url_medium: string,
    cover_img_url_small: string,
    itunes_track_url: string,
    itunes_track_preview_url: string,
    itunes_track_price: number,
}
