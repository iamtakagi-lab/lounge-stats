export type PlayerData = {
    rank?: string | undefined | null
    name?: string | undefined | null
    mmr?: string | undefined | null
    peak_mmr?: string | undefined | null
    win_rate?: string | undefined | null
    wl_last10?: string | undefined | null
    gl_last10?: string | undefined | null
    events_played?: string | undefined | null
    largest_gain?: string | undefined | null
    largest_loss?: string | undefined | null 
    strikes_data?: StrikesData | undefined | null
}

export type StrikesData = {
    name?: string | undefined | null
    strikes?: string | undefined | null
    muted?: string | undefined | null
    dates?: Array<string | undefined | null>
}