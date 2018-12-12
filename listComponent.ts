interface EventsList {
    events: Array<Event>
    filterCategory: string
    filterText: string
    numberOfUsers: string
    isFavourite: Function
}

interface Event {
    name: string
    date: Date
    key: string
    photo: URL
    city: string
    street: string
}

interface SearchForm {
    onFilteredTextChangeHandler: Function
    handleUsersChange: Function
    handleEventsFilterCategoryChange: Function
    filterCategory: string
    filterText: string
    numberOfUsers: number
}