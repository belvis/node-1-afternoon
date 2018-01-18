let messages = [];
let id = 0;
module.exports = {
    create: (req,res)=>{
        id++;
        let newMessage ={
            id: id,
            text: req.body.text,
            time: req.body.time
        };
        messages.push(newMessage);
        res.status(200).send('Sent!')
    },
    read: (req,res)=>{
        res.status(200).send(messages);
    },
    update: (req,res)=>{
        const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex( message => message.id == updateID );
    let message = messages[ messageIndex ];

    messages[ messageIndex ] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send( messages );
    },
    delete: (req,res)=>{
        messages= messages.filter(message=>{
            return message !== parseInt(req.params.id);
        })
        res.status(200).send('Deleted!')
    }
}