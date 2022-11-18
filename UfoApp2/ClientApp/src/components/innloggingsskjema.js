    render() {
        return (
            <div>
                <h1>Innlogging</h1>
                <div class="md-form">
                    <i class="fas fa-envelope prefix"></i>
                    <input type="text" name="email" class="form-control">
                        <label for="orangeForm-email">Din epost</label>
                </div>

                <div class="md-form">
                    <i class="fas fa-lock prefix"></i>
                    <input type="password" name="password" class="form-control">
                        <label for="orangeForm-pass">Ditt passord</label>
                </div>

                <div class="text-center">
                    <input class="btn btn-info btn-rounded mt-5" type="submit" name="submit" value="Logg inn">
                </div>
                <p class="text-center"><a class="btn btn-primary toggleForms">Registrering</a></p>
        );
            </div>
        )
    }