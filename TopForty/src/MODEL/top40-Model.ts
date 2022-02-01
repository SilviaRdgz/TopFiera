export interface Tracks {
    year: number,
    week: number,
    date: Date,
    positions: [Top40Positions]
}

export interface Top40Positions {
    position: Number,
    position_id: Number,
    title_id: Number,
    label_id: Number,
    label: string,
    prev_position: Number,
    num_weeks: Number,
    num_weeks_cumulative: Number,
    title: string,
    credit: string,
    cover_img_url: string,
    cover_img_url_large: string,
    cover_img_url_medium: string,
    cover_img_url_small: string,
    site_url: string,
    youtube_url: string,
    youtube_code: string,
    itunes_track_url: string,
    itunes_track_preview_url: string,
    itunes_track_price: Number,
    highest_position: Number,
    points: Number,
    first_position_date: Date,
    first_position_week: Date,
}
