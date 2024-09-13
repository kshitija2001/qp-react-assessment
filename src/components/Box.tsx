const Box = () =>{
    const boxStyle = {
        width: '200px',
        height: '100px',
        backgroundColor: 'lightblue',
        textAlign: 'center',
        lineHeight: '100px', // Centers text vertically
        margin: '0 auto' // Centers box horizontally
      }
    // return( <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
    //     <div style={{ width: '200px',
    //     height: '100px',
    //     backgroundColor: 'lightblue',
    //     textAlign: 'center',
    //     lineHeight: '100px',
    //      margin: '0 auto'
    //     }}>Centered Box</div>
    //   </div>)
    return (
        <div className={"container"}>
          <div className="box">Centered Box</div>
        </div>
      )
}

export default Box