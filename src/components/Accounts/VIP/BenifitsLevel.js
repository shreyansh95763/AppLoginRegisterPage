export const BenifitsLevel=()=>{
    return(<>
        <div className="vip-benefite-container">
            <h4><img alt="benefite images" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMaSURBVHgB7Zi9bhNBEMdnD9vIgiJKJIyUi2RHfMSREiXQ0KaEAp0VpaGCR8gTJHkC8h4Q+cQLQEmDQCmwTCTswi5cEKVBkWxxy845tuzz3O6sv+Lifs1Ze+u7mdv//O9mARISEhISJkBwJ9bK3lI7kN9BQh5miYB6xhG7hZJ/xZnuAJNOIN/PPHhE3SO8FxNWAhdn3pGU8BbmBN7r4uz1EWeuUULVj56nLlmGWyCQYq944H/RzdEmUCl7eSeQn+ciHZqr4I7YLZb8etyE2ATmVrQmDEUdWwNzK1oThqImE5h30ZrQFfWIhG6zaE1QRT2UwAIUrYmRok4Nnu0F3/jdhPOv57BIbL/YBnd9dSmMEaDQGydrIJVOwaKRztAxDY0GjtjDDB+u5fKv3rwEEz+/VaBerUN+Iw+bz4pgA64wrrS77qqnu8X7k7JUjHFwaGgFUFvCESVgknNz4bGpArHlT+syPLqFVfZ/MLboS21EQk9K/g8pxCEwWMktQyqThk670w+Iw6Wae/33GrL3s7CsrsFBSnGIsUXHyRrY2PdPlWWdAIPeE2w1W8ClUWuEx5UHK6z5gZQnGwf+KXUu9k2s/PYYhPDBwDgyspKPiqF48Ok47rT2czrjwDssHN0cWxlZySf8DlIxaNAmgB9QYdUbkrCREVs+N45j6syMDQ3HmWxkxJUP5TgUrI7M5ExcGXHlE+c4FOye2ORMHBlx5KNzHAp2AojOmTgyMsrH4DgUVgkgcc5kkpFRPgzHobBOQOdMOhlp5cN0HArrBJA4Z9LJSCcfruNQjJUAQjlTnIx08rFxHIqxE0AoZ6JkFCcfW8ehmCgBJOpMlIxI+YzhOBRTab3QPdoB7GA7GpURNt0j8hnTcSgmXgEk6kyPtx6F4yijnnzcgtudPIHjULC31zn8Kns78p/azYNuu9msNcP+OreW67ecQu0qTFK0UaayAj0GnWnzeRGy97KQvpvuBz+p41BMdQV6VD54x46QR6h9BBNBx5lG0UaZSQJI9cwrq0fude8i/Kf7PnuzwIaZbQD1nenmNyQkJCRQ/Af1/KxJb5BFsQAAAABJRU5ErkJggg==" />VIP1 Benefites level</h4> 
            <hr></hr>
            <div className="benefite-lists">
                <img alt="images" src="https://bdggame.in/assets/png/1-e22b9592.png" />
                <div className="benefite-list-mid">
                    <h5>Level up rewards</h5>
                    <p>Each account can only recieve 1 time</p>
                </div>
                <div className="benefite-list-end">
                    <div><img alt="button images" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEUAAAD92Vv9213/12v/qSf/pSL/piP/piT82Vz/2l//rkP+xUX+y0v/xkX/pSP/pyb/qDP92Vr/pSL+vz7+zEz+yUj+xUP/sjD901P+vDpFktN/AAAAEXRSTlMAgXETQu/AgWJhE9CwoJFxI8SgNiYAAABwSURBVCjP1dDJCoAwDEVR2zrPfXbQ//9RbRVx0XShgnh34UACSV4vjeGYoyCxLgBkNaFDBlcfPprj6HJecLbXTmfNNpbCcyWJuGdGMfsfawtfmA0QYwttoqz0/eVyibOclav7/Kmc4tKzqFgwLpKHrdO/Ihx/cMVZAAAAAElFTkSuQmCC" />60</div>
                    <div><img alt="button images" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgBtVdNctpQDJZemEyXHCHZJGFVbtCcIJgB1pgTQE6AOUHhBDHrQHG5QOAG6SqBdKb0Bl52Uniq5DgphGf8+Mk3wwxjWfqebOmTjGCBXwMnO59DnpQukMZLQDjhy9nYHCLAPSDdE6nxeTkIbGJiKqHWdU3YWCJKizhTQP5cqW6uGMySb0vAdODUaUGeNaHhAAjYOisFvtlsIu1ffaWXLPcGIrXPSsPrVOJpr3BDAC4cEIjgn5W+15avqRVSyfTApAIicCX2ymH+kzouEd0k+IbxzwZZSKgLfn3XF5Wg/Ub8MHBOlKY7oKhNVqCJWrnK0IMt8HDreAqpaTCFx0d4eloMwuhRZzRUTaR8qtG2pIJcJfC4okcGU/Z5rqOijYg1kGsKsDjCGuyIBUHLaECsiz6oSc9xjNki+psEIA2c9YijdA2m7B9WQcVVfGlyXKiEE28BfQQeGIoSUTuKn/XndcN+2b5CYpAha37/Xzhjyr83kIbfcCAgGdvwRIprvecUVaUAYE9Im0osgymrjB5cbM9zutuHPKrcBQ1MhSsQYrMiIeT/iuOOiH3zCeZQsUjMkpyl4qf9QpKMJiIeNJdJdlkclAYcbwpiEvhNeOo7zbRBw4L1Q3Hg1FVFZvNT/6ppQ8ra7qXdh6BG6lOG9yWLycPrj7eJ3JZUNhPZy5RMCiDsgAWEfPKtuNYesiZZkUoMTZGgRO10nAGZkXbzVms/0vcYP/kgvJu1rXw5W8go/+VvjMe+00Ai6yJiBCytIS8Prq2DRqzl4uVvZed67DltBKrDB4CluXNRHr4tkGvL3uT2yucpUYUDgt9/lxcKd/nammSe8w08UayKzQaS6XtSI7Hgohw05H1ExbA7wmi5W3q8y9j4CRNNlzm4SiZMgtibCLntOqwP7ahVE4BgCWkh0V9ZHOIZvvTRhjMNMBYVFEHaRPiKf5G+RtrJgpN+AAAAAElFTkSuQmCC" />0</div>
                </div>
            </div>
            <div className="benefite-lists">
                <img alt="images" src="https://bdggame.in/assets/png/2-087e2f87.png" />
                <div className="benefite-list-mid">
                    <h5>Monthly reward</h5>
                    <p>Each account can only recieve 1 time per month</p>
                </div>
                <div className="benefite-list-end">
                    <div><img alt="button images" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEUAAAD92Vv9213/12v/qSf/pSL/piP/piT82Vz/2l//rkP+xUX+y0v/xkX/pSP/pyb/qDP92Vr/pSL+vz7+zEz+yUj+xUP/sjD901P+vDpFktN/AAAAEXRSTlMAgXETQu/AgWJhE9CwoJFxI8SgNiYAAABwSURBVCjP1dDJCoAwDEVR2zrPfXbQ//9RbRVx0XShgnh34UACSV4vjeGYoyCxLgBkNaFDBlcfPprj6HJecLbXTmfNNpbCcyWJuGdGMfsfawtfmA0QYwttoqz0/eVyibOclav7/Kmc4tKzqFgwLpKHrdO/Ihx/cMVZAAAAAElFTkSuQmCC" />60</div>
                    <div><img alt="button images" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgBtVdNctpQDJZemEyXHCHZJGFVbtCcIJgB1pgTQE6AOUHhBDHrQHG5QOAG6SqBdKb0Bl52Uniq5DgphGf8+Mk3wwxjWfqebOmTjGCBXwMnO59DnpQukMZLQDjhy9nYHCLAPSDdE6nxeTkIbGJiKqHWdU3YWCJKizhTQP5cqW6uGMySb0vAdODUaUGeNaHhAAjYOisFvtlsIu1ffaWXLPcGIrXPSsPrVOJpr3BDAC4cEIjgn5W+15avqRVSyfTApAIicCX2ymH+kzouEd0k+IbxzwZZSKgLfn3XF5Wg/Ub8MHBOlKY7oKhNVqCJWrnK0IMt8HDreAqpaTCFx0d4eloMwuhRZzRUTaR8qtG2pIJcJfC4okcGU/Z5rqOijYg1kGsKsDjCGuyIBUHLaECsiz6oSc9xjNki+psEIA2c9YijdA2m7B9WQcVVfGlyXKiEE28BfQQeGIoSUTuKn/XndcN+2b5CYpAha37/Xzhjyr83kIbfcCAgGdvwRIprvecUVaUAYE9Im0osgymrjB5cbM9zutuHPKrcBQ1MhSsQYrMiIeT/iuOOiH3zCeZQsUjMkpyl4qf9QpKMJiIeNJdJdlkclAYcbwpiEvhNeOo7zbRBw4L1Q3Hg1FVFZvNT/6ppQ8ra7qXdh6BG6lOG9yWLycPrj7eJ3JZUNhPZy5RMCiDsgAWEfPKtuNYesiZZkUoMTZGgRO10nAGZkXbzVms/0vcYP/kgvJu1rXw5W8go/+VvjMe+00Ai6yJiBCytIS8Prq2DRqzl4uVvZed67DltBKrDB4CluXNRHr4tkGvL3uT2yucpUYUDgt9/lxcKd/nammSe8w08UayKzQaS6XtSI7Hgohw05H1ExbA7wmi5W3q8y9j4CRNNlzm4SiZMgtibCLntOqwP7ahVE4BgCWkh0V9ZHOIZvvTRhjMNMBYVFEHaRPiKf5G+RtrJgpN+AAAAAElFTkSuQmCC" />0</div>
                </div>
            </div>
            <div className="benefite-lists">
                <img alt="images" src="https://bdggame.in/assets/png/5-0303b9b0.png" />
                <div className="benefite-list-mid">
                    <h5>Rebate rate</h5>
                    <p>increase income of Rebate</p>
                </div>
                <div className="benefite-list-end">
                    <div><img style={{width:'1.7rem',height:"1.7rem"}} alt="button images" src="https://bdggame.in/assets/png/weal5-1d8bca4e.png" />0.05%</div>
                </div>
            </div>
            
        </div>
    </>)
}