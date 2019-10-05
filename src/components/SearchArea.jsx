import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="container">
            <div className=" row">
                <section className="col s6 offset-s0 ">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input onChange={props.handleChange} placeholder="Search Movie" type="text" />
                        </div>
                    </form>

                </section>
            </div>
        </div>
    )
}

export default SearchArea;